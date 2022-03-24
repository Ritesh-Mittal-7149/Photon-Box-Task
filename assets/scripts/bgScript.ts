
import { _decorator, Component, Node, Prefab, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;


 
@ccclass('bgScript')
export class bgScript extends Component {
    @property({type : Prefab})
    boxPrefab : Prefab;
    box : any;
    main : any;

    start () {
         this.main = this.node.getComponent('main');
         console.log(this.node.getChildByName('abc'));
    }
    joinButton(){
        let temp:any=this.node;
        temp.getComponent('main').join();
        this.box=instantiate(this.boxPrefab);
        this.node.addChild(this.box);
        //this.node.getChildByName('box').name=this.main.photon.myActor().actorNr + "";
        this.box.position=new Vec3(Math.floor(Math.random()*500),0,0);
        this.main.photon.myActor().setCustomProperty('a',this.box.position);
       console.log("name",this.main.photon.myActor().getCustomProperty('a'));

        this.node.getChildByName('join').active=false;
        this.node.getChildByName('leave').active=true;
       
    }
    // nameChange(){
    //     this.node.getChildByName('box').name=this.main.photon.myActor().actorNr+"";
    // }

    
    childAdd(position){
        this.box=instantiate(this.boxPrefab);
        this.node.addChild(this.box);
         let positionChild=position;
         this.node.getChildByName('box').name=this.main.photon.myActor().actorNr+"";
            console.log(this.main.photon.myActor().actorNr)
        //  this.main.photon.myActor().getCustomProperty('a');
        this.box.setPosition(positionChild.x,positionChild.y,positionChild.z);
        console.log(this.node.children,"Hello");
        // this.box.position=this.main.photon.myActor().getCustomProperty('a');
        // console.log(this.box.position);
    }
    destroyChild(name){
       
        this.node.getChildByName(name).destroy();
    }

    leaveButton(){
        
        let temp : any=this.node;
        this.box.destroy();
        this.node.getChildByName('join').active=true;
        this.node.getChildByName('leave').active=false;
        temp.getComponent('main').leave();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}


