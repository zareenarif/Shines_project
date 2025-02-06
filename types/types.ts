


export interface Foods{
    _id:string;
    type : "food";
    name : string;
    image? : {
        asset: {
            _ref: string;
            _type: "image";
        };
    }
}