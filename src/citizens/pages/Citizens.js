import React, { useEffect, useState } from 'react';
import CitizenList from '../components/CitizenList';
import api from '../../api/allcases';

const Citizens = () => {
    // const DUMMY_USERS = [
    //     {
    //         id: "c1",
    //         name: "Bhaskar",
    //         idCardNo: 4343 - 4343 - 3325,
    //         image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //         cases: 3
    //     },
    //     {
    //         id: "c2",
    //         name: "Roshan",
    //         idCardNo: 5564 - 4737 - 7738,
    //         image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //         cases: 2
    //     }
    // ];
    const [citizens, setCitizens ] = useState();
    useEffect(() => {
        const fetchCitizens = async () => {
            try{
                const response = await api.get('/public');
                setCitizens(response.data.plaintiffs);
            }   
            catch(err){
                //Not in the 200 response range
                if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.header);
                    console.log(err.response.status);
                }
                else{
                    console.log("An unexpected error occured---");
                    console.log(`Error: ${err.message}`);
                }
            }
        };

        fetchCitizens();
    },[setCitizens])
    return (
        <CitizenList users= {citizens} />
    );
}
export default Citizens;