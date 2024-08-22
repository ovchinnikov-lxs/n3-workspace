export type TProjectTag = (typeof PROJECTS_TAGS)[keyof typeof PROJECTS_TAGS];
export interface IProjectsItem {
    id: string;
    source: string;
    links?: {
        homepage?: string;
        design?: string;
    };
    tags: TProjectTag[];
}
