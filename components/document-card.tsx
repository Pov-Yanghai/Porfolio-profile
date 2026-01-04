"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink, Download } from "lucide-react"

interface DocumentCardProps {
  title: string
  type: string
  year?: string
  description?: string
  pdfUrl?: string
  className?: string
}

export default function DocumentCard({ title, type, year, description, pdfUrl, className = "" }: DocumentCardProps) {
  return (
    <Card className={`p-6 hover:shadow-lg transition-all border border-border ${className}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg shrink-0">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1 text-balance">{title}</h3>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs">
                  {type}
                </Badge>
                {year && <span className="text-sm text-muted-foreground font-medium">{year}</span>}
              </div>
            </div>
          </div>
          {description && <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>}
          <div className="flex gap-2">
            {pdfUrl ? (
              <>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View PDF
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="gap-2" asChild>
                  <a href={pdfUrl} download>
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </Button>
              </>
            ) : (
              <Button size="sm" variant="outline" disabled>
                Available upon request
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
