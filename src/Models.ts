export type Building = {
    id: string,
    buildingName: string,
    address: string
}

export type Checklist = {
    id: string,
    title: string,
    locationIds: string[]
}

export type Member = {
    id: string,
    name: string,
    email: string,
    roleId: string
}

export type Topic = Building | Checklist | Member;