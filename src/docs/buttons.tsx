
import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@/components/ui/buttonIcon";
import { FaArrowRight, FaCheck, FaHome, FaPlus, FaSave, FaStar, FaTrash } from "react-icons/fa";
import { LuPencil, LuPhoneMissed, LuSettings, LuTrash, LuX } from "react-icons/lu";

export function ButtonsDosc() {
  return (
    <>
      <div className="p-10 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Основные варианты */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Основные варианты</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button>Default (Primary)</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          {/* Размеры */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Размеры</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><FaHome /></Button>
            </div>
          </section>

          {/* С иконками в начале */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">С иконкой в начале (startIcon)</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button startIcon={<FaHome />}>Home</Button>
              <Button variant="destructive" startIcon={<FaTrash />}>Delete</Button>
              <Button variant="outline" startIcon={<FaPlus />}>Add New</Button>
              <Button variant="secondary" startIcon={<FaSave />}>Save</Button>
              <Button variant="ghost" startIcon={<FaCheck />}>Confirm</Button>
            </div>
          </section>

          {/* С иконками в конце */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">С иконкой в конце (endIcon)</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button endIcon={<FaArrowRight />}>Next</Button>
              <Button variant="destructive" endIcon={<FaArrowRight />}>Continue</Button>
              <Button variant="outline" endIcon={<FaArrowRight />}>Proceed</Button>
              <Button variant="secondary" endIcon={<FaArrowRight />}>Go</Button>
            </div>
          </section>

          {/* С обеими иконками */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Обе иконки</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button startIcon={<FaHome />} endIcon={<FaArrowRight />}>
                Home Page
              </Button>
              <Button variant="secondary" startIcon={<FaSave />} endIcon={<FaCheck />}>
                Save & Continue
              </Button>
            </div>
          </section>

          {/* Состояние loading */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Loading состояние</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button loading>Loading...</Button>
              <Button variant="destructive" loading>Deleting...</Button>
              <Button variant="outline" loading>Processing...</Button>
              <Button variant="secondary" loading>Saving...</Button>
            </div>
          </section>

          {/* Disabled состояние */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Disabled состояние</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button disabled>Disabled</Button>
              <Button variant="destructive" disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled</Button>
              <Button variant="secondary" disabled>Disabled</Button>
              <Button variant="ghost" disabled>Disabled</Button>
              <Button variant="link" disabled>Disabled</Button>
            </div>
          </section>

          {/* Все размеры для каждого варианта */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Все размеры для каждого варианта</h2>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Default:</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Destructive:</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="destructive" size="sm">Small</Button>
                <Button variant="destructive" size="default">Default</Button>
                <Button variant="destructive" size="lg">Large</Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Outline:</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline" size="default">Default</Button>
                <Button variant="outline" size="lg">Large</Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Secondary:</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="default">Default</Button>
                <Button variant="secondary" size="lg">Large</Button>
              </div>
            </div>
          </section>

        </div>
      </div>
      <div className="p-10 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Кастомные варианты */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Кастомные варианты (remove, change, x)</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonIcon variant="remove" />
              <ButtonIcon variant="change" />
              <ButtonIcon variant="x" />
            </div>
          </section>

          {/* Варианты из Button */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Варианты из Button (default, destructive, outline, secondary, ghost)</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonIcon variant="default">
                <FaHome />
              </ButtonIcon>
              <ButtonIcon variant="destructive">
                <FaTrash />
              </ButtonIcon>
              <ButtonIcon variant="outline">
                <FaStar />
              </ButtonIcon>
              <ButtonIcon variant="secondary">
                <FaCheck />
              </ButtonIcon>
              <ButtonIcon variant="ghost">
                <FaPlus />
              </ButtonIcon>
            </div>
          </section>

          {/* Размеры */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Размеры (sm, default, lg)</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonIcon variant="default" size="sm">
                <FaHome />
              </ButtonIcon>
              <ButtonIcon variant="default" size="default">
                <FaHome />
              </ButtonIcon>
              <ButtonIcon variant="default" size="lg">
                <FaHome />
              </ButtonIcon>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonIcon variant="destructive" size="sm">
                <FaTrash />
              </ButtonIcon>
              <ButtonIcon variant="destructive" size="default">
                <FaTrash />
              </ButtonIcon>
              <ButtonIcon variant="destructive" size="lg">
                <FaTrash />
              </ButtonIcon>
            </div>
          </section>

          {/* Варианты из Button с LU иконками */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Button варианты с LU иконками (iconLu)</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonIcon variant="default" iconLu>
                <LuPhoneMissed />
              </ButtonIcon>
              <ButtonIcon variant="destructive" iconLu>
                <LuTrash />
              </ButtonIcon>
              <ButtonIcon variant="outline" iconLu>
                <LuSettings />
              </ButtonIcon>
              <ButtonIcon variant="secondary" iconLu>
                <LuPencil />
              </ButtonIcon>
              <ButtonIcon variant="ghost" iconLu>
                <LuX />
              </ButtonIcon>
            </div>
          </section>

          {/* Loading */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Loading состояние (курсор wait)</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonIcon variant="remove" loading />
              <ButtonIcon variant="change" loading />
              <ButtonIcon variant="default" loading />
              <ButtonIcon variant="destructive" loading />
              <ButtonIcon variant="secondary" loading />
            </div>
          </section>

          {/* Disabled */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Disabled состояние (курсор not-allowed)</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonIcon variant="remove" disabled />
              <ButtonIcon variant="change" disabled />
              <ButtonIcon variant="x" disabled />
              <ButtonIcon variant="default" disabled><FaHome /></ButtonIcon>
              <ButtonIcon variant="destructive" disabled><FaTrash /></ButtonIcon>
              <ButtonIcon variant="outline" disabled><FaStar /></ButtonIcon>
              <ButtonIcon variant="secondary" disabled><FaCheck /></ButtonIcon>
              <ButtonIcon variant="ghost" disabled><FaPlus /></ButtonIcon>
            </div>
          </section>

        </div>
      </div>

    </>
  );
}