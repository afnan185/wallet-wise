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
export interface Expense {
    id : string
    tripId: string
    total : number
    paidBy: string
    createdAt : string
}

export interface Member {
id : string
tripId : string
memberName : string
createdAt : string

}

// balance
export interface Balance {
    id : string
    expenseId : string
    memberId : string
    amountOwed : number
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