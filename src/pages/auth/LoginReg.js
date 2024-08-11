import { useState } from 'react';
import shop1 from '../../images/shop1.png'
import { Box, Card, Grid, Tabs, Tab } from '@mui/material'
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';

const TabPanel = (props)=>{
    const {children, value, index} = props;
    return (
        <div role='tabpanel' hidden={value!==index}>
            {value===index && (
                <Box >{children}</Box>
            )}
        </div>
    ) 
}
function LoginReg() {
    const [value, setValue] = useState(0);
    const handleChange =(e, newValue )=>{
        setValue(newValue);
    }
    return (<>
    <Box>
        <Grid container sx={{height:'90vh'}} >
            <Grid item lg={7} sm={7} sx ={{
                backgroundImage : `url(${shop1})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                display:{xs:'none', sm : 'block'},
            }} >
            </Grid>
            <Grid item lg={5} sm={5} xs={12}>
                <Card sx={{width:"96%", height:"96%"}}>
                    <Box>
                        <Box sx={{borderBottom:1 , borderColor:'divider'}} >
                            <Tabs textColor='secondary' value={value} onChange={handleChange}>
                                <Tab label="User Login" sx={{textTransform:'none', fontWeight:'bold'}} ></Tab>
                                <Tab label="User Registration"  sx={{textTransform:'none', fontWeight:'bold'}} ></Tab>
                            </Tabs>
                        </Box>
                    <TabPanel value={value} index={0} >
                        <UserLogin />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <UserRegistration />
                    </TabPanel>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </Box>
    </>
    );
}
export default LoginReg;