export interface DropdownLink {
    text: string,
    to: string
}

export interface LinkType {
    text: string
    type: string
    to: string
    items?: DropdownLink[]
}

export type DataLinks = Array<LinkType>