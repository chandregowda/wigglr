
export class Deals {
    constructor(public title: String='', 
                public subTitle: String='', 
                public actualAmount: Number=0, 
                public offerAmount: Number=0, 
                public imagePath: String = '',
                public currency: String='',
                public actualValue: Number=0,
                public couponsAvailable: Number=0,
                public timeLeft: Date= new Date(),
                public gallery: Array<String>=[] ,
                public dealDescription: String='',
                public tnc: Array<string>=[],
                public address: String='',
                public latitude: Number=0,
                public longitude: Number=0) {

                    

    }
}