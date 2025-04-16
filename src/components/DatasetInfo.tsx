
import { aiDatasets } from "@/config/aiDatasets";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function DatasetInfo() {
  return (
    <div className="space-y-6 p-4">
      {aiDatasets.map((category, index) => (
        <Card key={index} className="p-4">
          <h2 className="text-xl font-bold mb-2">{category.name}</h2>
          <p className="text-muted-foreground mb-4">{category.description}</p>
          
          <div className="space-y-4">
            {category.datasets.map((dataset, dIndex) => (
              <div key={dIndex} className="border-l-2 border-aadi-primary pl-4">
                <h3 className="font-semibold text-lg">{dataset.feature}</h3>
                <div className="space-y-2 mt-2">
                  <div>
                    <Badge variant="default" className="mb-1">Recommended</Badge>
                    <a 
                      href={dataset.linkBest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-aadi-primary hover:underline ml-2"
                    >
                      {dataset.bestDataset}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">Alternative</Badge>
                    <a 
                      href={dataset.linkAlt}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:underline ml-2"
                    >
                      {dataset.altDataset}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
