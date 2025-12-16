export interface Trip {
    id : string
    name : string
    totalMembers : number
    createdBy : string
    createdAt : string
}

//what does trip need : Trip info and trip member info
/*
Trip Table: TripId(), Trip name(text), Total attendees(number)
Expences Table: expence(text), Total(number), ppTotal(number) TripID(string), paidby?

*/
export interface TripExpense {
    id : string
    tripId: string
    total : number
    paidBy: string
    createdAt : string
}

export interface TripMember {
id : string
tripId : string
userId : string

}

// balance
export interface TripBalance {
    tripId : string
    userId : string
    amount : number
}

//settle up  interface
/*
export interface SettleUp {
fromUserId : string
toUserId : string
amount : number

}
*/

//split expense interface
/*
export interface SplitExpense {
id : string
expenseId : string
userId : string
splitAmount : number 

}

*/