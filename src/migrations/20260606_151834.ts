import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_streamers_theme" AS ENUM('archive', 'creator', 'esports');
  CREATE TYPE "public"."enum_streamers_streamer_visual_config_profile_layout" AS ENUM('bento', 'fullwidth-timeline', 'classic-wiki');
  CREATE TYPE "public"."enum_streamers_streamer_visual_config_card_style" AS ENUM('clean-card', 'chaos-glitch', 'brutal-flat', 'retro-box');
  CREATE TYPE "public"."enum_streamers_streamer_visual_config_vibe_accent" AS ENUM('default', 'danger', 'legendary', 'muted');
  CREATE TYPE "public"."enum_events_type" AS ENUM('stream', 'trip', 'tournament', 'collab', 'announcement');
  CREATE TYPE "public"."enum_events_event_ui_config_layout_template" AS ENUM('retro-marathon', 'chaos-incident', 'clean-stream', 'brutal-alert');
  CREATE TYPE "public"."enum_events_event_ui_config_event_vibe" AS ENUM('normal', 'highlight', 'alert', 'muted');
  CREATE TYPE "public"."enum_epochs_epoch_ui_config_base_theme" AS ENUM('clean', 'chaos', 'retro', 'brutal');
  CREATE TYPE "public"."enum_epochs_epoch_ui_config_screen_overlay" AS ENUM('none', 'crt-lines', 'vhs-distortion', 'film-grain');
  CREATE TYPE "public"."enum_reviews_attached_to" AS ENUM('to-streamer', 'to-epoch', 'to-event');
  CREATE TYPE "public"."enum_stream_grids_participants_role" AS ENUM('organizer', 'headliner', 'participant', 'guest');
  CREATE TYPE "public"."enum_stream_grids_type" AS ENUM('marathon', 'tournament', 'series', 'collab', 'festival');
  CREATE TYPE "public"."enum_squad_members_role" AS ENUM('leader', 'core', 'secondary', 'ex-member');
  CREATE TYPE "public"."enum_epoch_participants_role_in_epoch" AS ENUM('legend', 'core-member', 'secondary', 'guest', 'ex-member');
  CREATE TYPE "public"."enum_epoch_participants_style_strategy" AS ENUM('inherit-epoch', 'force-personal-style');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "streamers_nicknames" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"nickname" varchar NOT NULL
  );
  
  CREATE TABLE "streamers_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "streamers_blocks_youtube_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "streamers_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"author" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "streamers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"real_name" varchar,
  	"biography" jsonb,
  	"avatar_id" integer,
  	"banner_id" integer,
  	"theme" "enum_streamers_theme" DEFAULT 'archive',
  	"streamer_visual_config_profile_layout" "enum_streamers_streamer_visual_config_profile_layout" DEFAULT 'bento',
  	"streamer_visual_config_card_style" "enum_streamers_streamer_visual_config_card_style" DEFAULT 'clean-card',
  	"streamer_visual_config_vibe_accent" "enum_streamers_streamer_visual_config_vibe_accent" DEFAULT 'default',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "events_blocks_event_youtube" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar NOT NULL,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_event_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"author" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_event_report" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"html_report" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"description" varchar,
  	"type" "enum_events_type" DEFAULT 'stream' NOT NULL,
  	"epoch_id" integer NOT NULL,
  	"event_ui_config_layout_template" "enum_events_event_ui_config_layout_template" DEFAULT 'clean-stream',
  	"event_ui_config_event_vibe" "enum_events_event_ui_config_event_vibe" DEFAULT 'normal',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "events_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"streamers_id" integer
  );
  
  CREATE TABLE "squads" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"logo_id" integer,
  	"history" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "epochs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"squad_id" integer NOT NULL,
  	"date_start" timestamp(3) with time zone NOT NULL,
  	"date_end" timestamp(3) with time zone,
  	"description" jsonb,
  	"epoch_ui_config_base_theme" "enum_epochs_epoch_ui_config_base_theme" DEFAULT 'clean',
  	"epoch_ui_config_screen_overlay" "enum_epochs_epoch_ui_config_screen_overlay" DEFAULT 'none',
  	"epoch_ui_config_epoch_bg_color" varchar,
  	"epoch_ui_config_epoch_accent_color" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "reviews" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"author" varchar DEFAULT 'Аноним',
  	"content" jsonb NOT NULL,
  	"attached_to" "enum_reviews_attached_to" DEFAULT 'to-event' NOT NULL,
  	"streamer_link_id" integer,
  	"epoch_link_id" integer,
  	"event_link_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "stream_grids_participants" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"streamer_id" integer NOT NULL,
  	"role" "enum_stream_grids_participants_role" DEFAULT 'participant' NOT NULL,
  	"note" varchar
  );
  
  CREATE TABLE "stream_grids" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"type" "enum_stream_grids_type" DEFAULT 'marathon' NOT NULL,
  	"description" jsonb,
  	"date_start" timestamp(3) with time zone,
  	"date_end" timestamp(3) with time zone,
  	"cover_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "stream_grids_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"events_id" integer
  );
  
  CREATE TABLE "squad_members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"streamer_id" integer NOT NULL,
  	"squad_id" integer NOT NULL,
  	"role" "enum_squad_members_role",
  	"join_date" timestamp(3) with time zone,
  	"leave_date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "epoch_participants" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"epoch_id" integer NOT NULL,
  	"streamer_id" integer NOT NULL,
  	"role_in_epoch" "enum_epoch_participants_role_in_epoch" NOT NULL,
  	"style_strategy" "enum_epoch_participants_style_strategy" DEFAULT 'inherit-epoch',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"streamers_id" integer,
  	"events_id" integer,
  	"squads_id" integer,
  	"epochs_id" integer,
  	"reviews_id" integer,
  	"stream_grids_id" integer,
  	"squad_members_id" integer,
  	"epoch_participants_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "streamers_nicknames" ADD CONSTRAINT "streamers_nicknames_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."streamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "streamers_blocks_hero" ADD CONSTRAINT "streamers_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."streamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "streamers_blocks_youtube_embed" ADD CONSTRAINT "streamers_blocks_youtube_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."streamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "streamers_blocks_quote" ADD CONSTRAINT "streamers_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."streamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "streamers" ADD CONSTRAINT "streamers_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "streamers" ADD CONSTRAINT "streamers_banner_id_media_id_fk" FOREIGN KEY ("banner_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_event_youtube" ADD CONSTRAINT "events_blocks_event_youtube_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_event_quote" ADD CONSTRAINT "events_blocks_event_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_event_report" ADD CONSTRAINT "events_blocks_event_report_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_epoch_id_epochs_id_fk" FOREIGN KEY ("epoch_id") REFERENCES "public"."epochs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_streamers_fk" FOREIGN KEY ("streamers_id") REFERENCES "public"."streamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "squads" ADD CONSTRAINT "squads_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "epochs" ADD CONSTRAINT "epochs_squad_id_squads_id_fk" FOREIGN KEY ("squad_id") REFERENCES "public"."squads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reviews" ADD CONSTRAINT "reviews_streamer_link_id_streamers_id_fk" FOREIGN KEY ("streamer_link_id") REFERENCES "public"."streamers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reviews" ADD CONSTRAINT "reviews_epoch_link_id_epochs_id_fk" FOREIGN KEY ("epoch_link_id") REFERENCES "public"."epochs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reviews" ADD CONSTRAINT "reviews_event_link_id_events_id_fk" FOREIGN KEY ("event_link_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "stream_grids_participants" ADD CONSTRAINT "stream_grids_participants_streamer_id_streamers_id_fk" FOREIGN KEY ("streamer_id") REFERENCES "public"."streamers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "stream_grids_participants" ADD CONSTRAINT "stream_grids_participants_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stream_grids"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "stream_grids" ADD CONSTRAINT "stream_grids_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "stream_grids_rels" ADD CONSTRAINT "stream_grids_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."stream_grids"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "stream_grids_rels" ADD CONSTRAINT "stream_grids_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "squad_members" ADD CONSTRAINT "squad_members_streamer_id_streamers_id_fk" FOREIGN KEY ("streamer_id") REFERENCES "public"."streamers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "squad_members" ADD CONSTRAINT "squad_members_squad_id_squads_id_fk" FOREIGN KEY ("squad_id") REFERENCES "public"."squads"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "epoch_participants" ADD CONSTRAINT "epoch_participants_epoch_id_epochs_id_fk" FOREIGN KEY ("epoch_id") REFERENCES "public"."epochs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "epoch_participants" ADD CONSTRAINT "epoch_participants_streamer_id_streamers_id_fk" FOREIGN KEY ("streamer_id") REFERENCES "public"."streamers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_streamers_fk" FOREIGN KEY ("streamers_id") REFERENCES "public"."streamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_squads_fk" FOREIGN KEY ("squads_id") REFERENCES "public"."squads"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_epochs_fk" FOREIGN KEY ("epochs_id") REFERENCES "public"."epochs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_reviews_fk" FOREIGN KEY ("reviews_id") REFERENCES "public"."reviews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_stream_grids_fk" FOREIGN KEY ("stream_grids_id") REFERENCES "public"."stream_grids"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_squad_members_fk" FOREIGN KEY ("squad_members_id") REFERENCES "public"."squad_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_epoch_participants_fk" FOREIGN KEY ("epoch_participants_id") REFERENCES "public"."epoch_participants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "streamers_nicknames_order_idx" ON "streamers_nicknames" USING btree ("_order");
  CREATE INDEX "streamers_nicknames_parent_id_idx" ON "streamers_nicknames" USING btree ("_parent_id");
  CREATE INDEX "streamers_blocks_hero_order_idx" ON "streamers_blocks_hero" USING btree ("_order");
  CREATE INDEX "streamers_blocks_hero_parent_id_idx" ON "streamers_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "streamers_blocks_hero_path_idx" ON "streamers_blocks_hero" USING btree ("_path");
  CREATE INDEX "streamers_blocks_youtube_embed_order_idx" ON "streamers_blocks_youtube_embed" USING btree ("_order");
  CREATE INDEX "streamers_blocks_youtube_embed_parent_id_idx" ON "streamers_blocks_youtube_embed" USING btree ("_parent_id");
  CREATE INDEX "streamers_blocks_youtube_embed_path_idx" ON "streamers_blocks_youtube_embed" USING btree ("_path");
  CREATE INDEX "streamers_blocks_quote_order_idx" ON "streamers_blocks_quote" USING btree ("_order");
  CREATE INDEX "streamers_blocks_quote_parent_id_idx" ON "streamers_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "streamers_blocks_quote_path_idx" ON "streamers_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "streamers_slug_idx" ON "streamers" USING btree ("slug");
  CREATE INDEX "streamers_avatar_idx" ON "streamers" USING btree ("avatar_id");
  CREATE INDEX "streamers_banner_idx" ON "streamers" USING btree ("banner_id");
  CREATE INDEX "streamers_updated_at_idx" ON "streamers" USING btree ("updated_at");
  CREATE INDEX "streamers_created_at_idx" ON "streamers" USING btree ("created_at");
  CREATE INDEX "events_blocks_event_youtube_order_idx" ON "events_blocks_event_youtube" USING btree ("_order");
  CREATE INDEX "events_blocks_event_youtube_parent_id_idx" ON "events_blocks_event_youtube" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_event_youtube_path_idx" ON "events_blocks_event_youtube" USING btree ("_path");
  CREATE INDEX "events_blocks_event_quote_order_idx" ON "events_blocks_event_quote" USING btree ("_order");
  CREATE INDEX "events_blocks_event_quote_parent_id_idx" ON "events_blocks_event_quote" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_event_quote_path_idx" ON "events_blocks_event_quote" USING btree ("_path");
  CREATE INDEX "events_blocks_event_report_order_idx" ON "events_blocks_event_report" USING btree ("_order");
  CREATE INDEX "events_blocks_event_report_parent_id_idx" ON "events_blocks_event_report" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_event_report_path_idx" ON "events_blocks_event_report" USING btree ("_path");
  CREATE INDEX "events_epoch_idx" ON "events" USING btree ("epoch_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "events_rels_order_idx" ON "events_rels" USING btree ("order");
  CREATE INDEX "events_rels_parent_idx" ON "events_rels" USING btree ("parent_id");
  CREATE INDEX "events_rels_path_idx" ON "events_rels" USING btree ("path");
  CREATE INDEX "events_rels_streamers_id_idx" ON "events_rels" USING btree ("streamers_id");
  CREATE UNIQUE INDEX "squads_slug_idx" ON "squads" USING btree ("slug");
  CREATE INDEX "squads_logo_idx" ON "squads" USING btree ("logo_id");
  CREATE INDEX "squads_updated_at_idx" ON "squads" USING btree ("updated_at");
  CREATE INDEX "squads_created_at_idx" ON "squads" USING btree ("created_at");
  CREATE UNIQUE INDEX "epochs_slug_idx" ON "epochs" USING btree ("slug");
  CREATE INDEX "epochs_squad_idx" ON "epochs" USING btree ("squad_id");
  CREATE INDEX "epochs_updated_at_idx" ON "epochs" USING btree ("updated_at");
  CREATE INDEX "epochs_created_at_idx" ON "epochs" USING btree ("created_at");
  CREATE INDEX "reviews_streamer_link_idx" ON "reviews" USING btree ("streamer_link_id");
  CREATE INDEX "reviews_epoch_link_idx" ON "reviews" USING btree ("epoch_link_id");
  CREATE INDEX "reviews_event_link_idx" ON "reviews" USING btree ("event_link_id");
  CREATE INDEX "reviews_updated_at_idx" ON "reviews" USING btree ("updated_at");
  CREATE INDEX "reviews_created_at_idx" ON "reviews" USING btree ("created_at");
  CREATE INDEX "stream_grids_participants_order_idx" ON "stream_grids_participants" USING btree ("_order");
  CREATE INDEX "stream_grids_participants_parent_id_idx" ON "stream_grids_participants" USING btree ("_parent_id");
  CREATE INDEX "stream_grids_participants_streamer_idx" ON "stream_grids_participants" USING btree ("streamer_id");
  CREATE UNIQUE INDEX "stream_grids_slug_idx" ON "stream_grids" USING btree ("slug");
  CREATE INDEX "stream_grids_cover_idx" ON "stream_grids" USING btree ("cover_id");
  CREATE INDEX "stream_grids_updated_at_idx" ON "stream_grids" USING btree ("updated_at");
  CREATE INDEX "stream_grids_created_at_idx" ON "stream_grids" USING btree ("created_at");
  CREATE INDEX "stream_grids_rels_order_idx" ON "stream_grids_rels" USING btree ("order");
  CREATE INDEX "stream_grids_rels_parent_idx" ON "stream_grids_rels" USING btree ("parent_id");
  CREATE INDEX "stream_grids_rels_path_idx" ON "stream_grids_rels" USING btree ("path");
  CREATE INDEX "stream_grids_rels_events_id_idx" ON "stream_grids_rels" USING btree ("events_id");
  CREATE INDEX "squad_members_streamer_idx" ON "squad_members" USING btree ("streamer_id");
  CREATE INDEX "squad_members_squad_idx" ON "squad_members" USING btree ("squad_id");
  CREATE INDEX "squad_members_updated_at_idx" ON "squad_members" USING btree ("updated_at");
  CREATE INDEX "squad_members_created_at_idx" ON "squad_members" USING btree ("created_at");
  CREATE INDEX "epoch_participants_epoch_idx" ON "epoch_participants" USING btree ("epoch_id");
  CREATE INDEX "epoch_participants_streamer_idx" ON "epoch_participants" USING btree ("streamer_id");
  CREATE INDEX "epoch_participants_updated_at_idx" ON "epoch_participants" USING btree ("updated_at");
  CREATE INDEX "epoch_participants_created_at_idx" ON "epoch_participants" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_streamers_id_idx" ON "payload_locked_documents_rels" USING btree ("streamers_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_squads_id_idx" ON "payload_locked_documents_rels" USING btree ("squads_id");
  CREATE INDEX "payload_locked_documents_rels_epochs_id_idx" ON "payload_locked_documents_rels" USING btree ("epochs_id");
  CREATE INDEX "payload_locked_documents_rels_reviews_id_idx" ON "payload_locked_documents_rels" USING btree ("reviews_id");
  CREATE INDEX "payload_locked_documents_rels_stream_grids_id_idx" ON "payload_locked_documents_rels" USING btree ("stream_grids_id");
  CREATE INDEX "payload_locked_documents_rels_squad_members_id_idx" ON "payload_locked_documents_rels" USING btree ("squad_members_id");
  CREATE INDEX "payload_locked_documents_rels_epoch_participants_id_idx" ON "payload_locked_documents_rels" USING btree ("epoch_participants_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "streamers_nicknames" CASCADE;
  DROP TABLE "streamers_blocks_hero" CASCADE;
  DROP TABLE "streamers_blocks_youtube_embed" CASCADE;
  DROP TABLE "streamers_blocks_quote" CASCADE;
  DROP TABLE "streamers" CASCADE;
  DROP TABLE "events_blocks_event_youtube" CASCADE;
  DROP TABLE "events_blocks_event_quote" CASCADE;
  DROP TABLE "events_blocks_event_report" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_rels" CASCADE;
  DROP TABLE "squads" CASCADE;
  DROP TABLE "epochs" CASCADE;
  DROP TABLE "reviews" CASCADE;
  DROP TABLE "stream_grids_participants" CASCADE;
  DROP TABLE "stream_grids" CASCADE;
  DROP TABLE "stream_grids_rels" CASCADE;
  DROP TABLE "squad_members" CASCADE;
  DROP TABLE "epoch_participants" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_streamers_theme";
  DROP TYPE "public"."enum_streamers_streamer_visual_config_profile_layout";
  DROP TYPE "public"."enum_streamers_streamer_visual_config_card_style";
  DROP TYPE "public"."enum_streamers_streamer_visual_config_vibe_accent";
  DROP TYPE "public"."enum_events_type";
  DROP TYPE "public"."enum_events_event_ui_config_layout_template";
  DROP TYPE "public"."enum_events_event_ui_config_event_vibe";
  DROP TYPE "public"."enum_epochs_epoch_ui_config_base_theme";
  DROP TYPE "public"."enum_epochs_epoch_ui_config_screen_overlay";
  DROP TYPE "public"."enum_reviews_attached_to";
  DROP TYPE "public"."enum_stream_grids_participants_role";
  DROP TYPE "public"."enum_stream_grids_type";
  DROP TYPE "public"."enum_squad_members_role";
  DROP TYPE "public"."enum_epoch_participants_role_in_epoch";
  DROP TYPE "public"."enum_epoch_participants_style_strategy";`)
}
