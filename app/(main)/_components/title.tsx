"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import React, { useRef, useState } from "react";

interface TitleProps {
    initialData: Doc<"documents">;
}

const Title = ({initialData}: TitleProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const update = useMutation(api.documents.update)
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(initialData?.title || "Untitled")

    const enableInput = () => {
        setTitle(initialData.title)
        setEditing(true)
        setTimeout(() => {
            inputRef.current?.focus()
            inputRef.current?.setSelectionRange(0, inputRef.current.value.length)
        }, 0)
    }

    const disableInput = () => {
        setEditing(false)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
        update({
            id: initialData._id,
            title: event.target.value || "Untitled"
        })
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            disableInput()
        }
    }

  return (
    <div className="flex items-center gap-x-1">
        {!!initialData.icon && <p>{initialData.icon}</p>}
        {editing ? (
            <Input
                ref={inputRef}
                onClick={enableInput}
                onBlur={disableInput}
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={title}
                className="h-7 px-2 focus-visible:ring-transparent"
            />
        ) : (
            <Button variant="ghost" size="sm" className="font-normal h-auto p-1" onClick={enableInput}>
                <span className="truncate">
                    {initialData?.title}
                </span>
            </Button>
        )}
    </div>
  )
}

Title.Skeleton = function TitleSkeleton() {
    return (
        <Skeleton className="h-9 w-20 rounded-md" />
    )
}

export default Title