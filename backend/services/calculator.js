function calculateTotalPrice (req , res) {
    try{
        const { order , hasMemberCard} = req.body;

        if(!order || ! hasMemberCard){
            return res.status(400).json({
                massage: "Invalid Request"
            })
        }

        const MENU = {
            "Red_set": 50,
            "Green_set": 40,
            "Blue_set": 30,
            "Yellow_set": 50,
            "Pink_set": 80,
            "Purple_set": 90,
            "Orange_set": 120
        };
        let totalPrice = 0;
        order.forEach(item => {
            if (item.quantity > 0) {
                if ((item.Name === "Orange_set" || item.Name === "Pink_set" || item.Name === "Green_set") && item.quantity >= 2) {
                    const NumberOfDouble = Math.floor(item.quantity / 2);
                    totalPrice += (MENU[item.Name] * item.quantity) - (MENU[item.Name] * item.quantity * 0.05);
                } else {
                    totalPrice += MENU[item.Name] * item.quantity;
                }
            }
        });

        if(hasMemberCard === "1"){
            totalPrice = totalPrice - (totalPrice * 0.1)
        }
        

        return res.status(200).json({
            totalPrice : totalPrice
        })
    } catch (err){
        return res.status(500).json({
            massage : `Internal Server Error ${err}`
        })
    }
}

module.exports = { calculateTotalPrice };