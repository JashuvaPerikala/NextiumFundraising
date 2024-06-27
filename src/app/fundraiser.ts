export interface Fundraiser {
    id:number;
    fundraiserId: number;
    userId: number;
    title: string;
    description: string;
    goal: number;
    amountRaised: number;
    startDate: Date;
    endDate: Date;
    createdDate: Date;
}
