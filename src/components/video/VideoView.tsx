'use client'

import { useMutation } from '@apollo/client/react'
import { useEffect, useRef } from 'react'

import { VideoPlayer } from '../ui/videoPlayer'

interface VideoViewProps {
	videoId: string
	thumbnailUrl: string
	src: string
}

export function VideoView({ videoId, thumbnailUrl, src }: VideoViewProps) {
	return <VideoPlayer thumbnailUrl={thumbnailUrl} src={src} />
}
