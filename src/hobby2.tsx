import List from './list2.tsx'
import Table from './table2.tsx'
import Form from './form2.tsx'
import f1Image from './assets/2025-F1-drivers-photoshoot.png';


function minhHobby(){
    return(
        <>
            <img src={f1Image} height="360" width="630" alt="f1 drivers"/>
            <p>Formula 1 is a thrilling motorsport where the world's best drivers compete in high-speed races across iconic circuits worldwide. I follow all the teams, drivers, and technical innovations that make the sport exciting!</p>
            <List/>
            <Table/>
            <Form/>
        </>
    )
}

export default minhHobby;
