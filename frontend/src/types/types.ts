import React from "react";

export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface FeatureSectionProps {
  title: string;
  features: string[];
  img: string;
}