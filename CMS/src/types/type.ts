
export interface  AnalyticsPoint { 
    name: string;
    sales: number;
}

export interface NewMembers { 
    name: string;
    title: string;
    avatar:string
    
}
export interface Product {
    id: string;
    name: string;
    category: string;
    price: string ; 
    stock: number;
    status: "In Stock" | "Low Stock" | "Out of Stock";
}
  

export interface Transaction { 
    customer: string;
    avatar: string;
    date: string;
    amount: string
    status:string
}
export interface Users { 
 
        id: string;
        name: string
        email: string
        avatar: string
        status: string
        transaction:string
        
}


export interface Orders { 
    name: string
    email: string
    amount: string
    avatar:string
}

export interface Mails { 
    id: string
    sender: string
    subject: string
    body: string
    read:boolean
}

  