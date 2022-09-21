
  const insertData=(db,data)=>{
    let tnx=db.transaction("posts","readwrite");
    let store=tnx.objectStore("posts");
    let query=store.put(data);
    query.onerror=(event)=>{
      console.log(event);
     
    }
    query.onsuccess=(event)=>{
      console.log(event);
      console.log("data successful ly add")
    }
tnx.oncomplete=()=>db.close();
  }
  const getData=(db,id)=>{
    let tnx=db.transaction("posts","readonly");
    let store=tnx.objectStore("posts");
    let query=store.get(id);
    query.onerror=(event)=>{
      console.log(event);
    }
    query.onsuccess=(event)=>{
      console.log(event);
    }
tnx.oncomplete=()=>db.close();
  }
let getAllData=(db)=>{
  let data=[]
    let tnx=db.transaction("posts","readonly");
    let store=tnx.objectStore("posts");
    store.openCursor().onsuccess=(event)=> {
     let cursor=event.target.result;
     if(cursor){
       data.push(cursor.value);
       cursor.continue();
     }
      
    }
    
tnx.oncomplete=()=>db.close();
return data;
  }
  const delData=(db,id)=>{
    let tnx=db.transaction("posts","read");
    let store=tnx.objectStore("posts");
    let query=store.delete(id);
    query.onerror=(event)=>{
      console.log(event);
    }
    query.onsuccess=(event)=>{
      console.log(event);
    }
tnx.oncomplete=()=>db.close();
  }
 export{insertData,getData,getAllData, delData};