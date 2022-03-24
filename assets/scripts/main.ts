import Server from './server';
import { _decorator, Component, Node, Prefab, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;


 
@ccclass('main')
export class main extends Component {
    
    photon : any;

    start () {
        this.photon=new Server();
      this.photon.connectToRegionMaster('IN');
      this.photon.abc(this.node.getComponent('bgScript'));
    }

    join(){
        this.photon.joinRoom("1",{createIfNotExists : true},{maxPlayers : 5});
        
    }
    leave(){
        this.photon.leaveRoom();
    }
    

    // update (deltaTime: number) {
    //     // [4]
    // }
}

