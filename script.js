async function getdata(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=d90eef66-b5e0-4cfb-90a0-464635d8902b&offset=0").catch(e=>{
        console.log("err "+e);
    })
    .then(data=>data.json())
    .then(data=>{
        if(data.status!="success")return;

        const matchList=data.data;
        if(!matchList) return [];

        const relevantData= matchList.map(match=> `${match.name} , ${match.status}`)
        console.log(relevantData)
        document.getElementById('matches').innerHTML=relevantData.map(match=> `<li> ${match} </li>`).join(' ');
        return relevantData;
    }).catch(e=>{
        console.log(e)
    })
}
getdata();