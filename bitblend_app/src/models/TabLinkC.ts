import { TabLink } from "./TabLink";

export interface TabLinkC extends Omit<TabLink, 'mdFileName'> {
    component: React.FC;
}