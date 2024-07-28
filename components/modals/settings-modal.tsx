"use client"

import { Dialog, DialogHeader, DialogContent } from "@/components/ui/dialog"
import { UseSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode-toggle"

export const SettingsModal = () => {
    const settings = UseSettings()

    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="pb-3 border-b">
                    <h2 className="text-lg font-medium">My Settings</h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearance
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground">
                            Customize how Mindforge looks on your device
                        </span>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}