"use client"

import {
    Dialog,
    DialogHeader,
    DialogContent
} from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useParams } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {

    const params = useParams()
    const [file, setFile] = useState<File>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const coverImage = useCoverImage()
    const { edgestore } = useEdgeStore()
    const update = useMutation(api.documents.update)

    const onClose = () => {
        setIsSubmitting(false)
        setFile(undefined)
        coverImage.onClose()
    }

    const onChange = async(file?: File) => {
        if(file) {
            setIsSubmitting(true)
            setFile(file)

            const res = await edgestore.publicFiles.upload({
                file,
                options: {
                  replaceTargetUrl: coverImage.url,
                },
            });

            await update({
                id: params.documentId as Id<"documents">,
                coverImage: res.url
            })

            onClose()
        }
    }

    return (
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-center text-lg font-semibold">
                        Cover Image
                    </h2>
                </DialogHeader>
                <SingleImageDropzone 
                    className="w-full outline-none"
                    value={file}
                    disabled={isSubmitting}
                    onChange={onChange}
                />
            </DialogContent>
        </Dialog>
    )
}