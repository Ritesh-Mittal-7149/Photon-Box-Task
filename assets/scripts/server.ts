export default class Server extends Photon.LoadBalancing.LoadBalancingClient{

    bgScript:any;
    constructor(){
        super(1,'047863c6-c376-415c-a993-e29ed6e0c41f',"123");
    }
    onJoinRoom(createdByMe: boolean): void {
        console.log("room : ",this.myRoom());
    }
    onActorJoin(actor: Photon.LoadBalancing.Actor): void {
        
       
       console.log("actors : ",this.myRoomActors());
       console.log("array : ",Object.values(this.myRoomActors()));
       let arr=Object.values(this.myRoomActors());
       for(let i = 0;i<arr.length+1;i++){
           if(arr[i].isLocal == false){
                if(!arr.includes(this.myActor().actorNr)){
               console.log(arr[i].getCustomProperty('a'));

                 this.bgScript.childAdd(arr[i].getCustomProperty('a'));
                }   
           }
        //    else{
        //        this.bgScript.nameChange();
        //    }
       }
    }

    onActorLeave(actor: Photon.LoadBalancing.Actor, cleanup: boolean): void {
        console.log("actors : ",this.myRoomActors());
        let actorName=this.myActor().actorNr+"";
        this.bgScript.destroyChild(actorName);
    }

    abc(demo){
        this.bgScript=demo;
    }
}
