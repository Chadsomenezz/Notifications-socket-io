const config = require("./config/config");

class Main extends config{
    constructor() {
        super()
        this.set_config();
        this.views();
        this.socket();


    }
    set_config(){
        this.app.set("views",this.path.join(__dirname,"views"))
        this.app.set("view engine","ejs");
        this.app.use(this.express.urlencoded({extended:true}));
        this.app.use(this.express.static(this.path.join(__dirname,"public")))
    }
    views(){
        this.app.get("/",(req,res)=>{
            res.render('index');
        })
    }
    socket(){
        this.io.on("connection",(socket)=>{

            this.io.emit('userConnect',{userId:socket.id});

            socket.on('disconnect',()=>{
                this.io.emit("userDisconnect",{userId:socket.id})
            })

            socket.on("alertThem",(data)=>{
                this.io.emit("alertThemAll",{userId:socket.id})
            })
        })
    }


}

new Main();