"use client";

import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { redirect, useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Item } from "./Item";
import { cn } from "@/lib/utils";
import { FileIcon } from "lucide-react";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

const DocumentList = ({
  data,
  level = 0,
  parentDocumentId,
}: DocumentListProps) => {
  const params = useParams();
  const router = useRouter();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocumentId,
  });

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  const onExpand = (documentId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [documentId]: !prev[documentId],
    }));
  };

  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }

  return (
    <>
      <p
        style={{
          paddingLeft: level ? `${level * 12 + 12}px` : "12px",
        }}
        className={cn(
          "hidden text-sm font-medium text-muted-foreground/80",
          expanded && "last:block",
          level === 0 && "hidden"
        )}
      >
        No Pages Inside
      </p>
      {documents.map((doc) => {
        return (
          <div key={doc._id}>
            <Item
              id={doc._id}
              onClick={() => {
                onRedirect(doc._id);
              }}
              label={doc.title}
              icon={FileIcon}
              documentIcon={doc.icon}
              active={params.documentid === doc._id}
              level={level}
              onExpand={() => onExpand(doc._id)}
              expanded={expanded[doc._id]}
            />
            {expanded[doc._id] && (
              <DocumentList parentDocumentId={doc._id} level={level + 1} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default DocumentList;
