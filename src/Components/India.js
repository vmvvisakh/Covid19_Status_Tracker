import React , {Component} from 'react'
import {Card} from 'react-bootstrap';
import Statedata from './Statedata'
import Axios from 'axios'

class India extends Component{
  constructor(){
    super();
    this.state = {
      stateData : {}
    }
  }
  componentDidMount(){
    Axios.get("https://corona.lmao.ninja/v2/countries/India").then(response =>{
     
      this.setState({stateData:response.data})
      console.log( response.data);

    });
  }

   
    render(){
      return (
        <div className='row'>
          <div className='col-md-12'>
            <img src='https://png.pngtree.com/element_our/sm/20180124/sm_5a686577a583d.jpg' height="80 px" />
            <h3>INDIA</h3>
            </div>
            <div className='col-md-12'>
            <div className='row'>
            <div className='col-md-3'>
            <Card className="bg-primary" text='white' style={{ width: '18rem' }}>
      <Card.Body className="text-center" >
        <Card.Title>TOTAL CASES</Card.Title>
        <h3>29451</h3>
        <Card.Text>
        
        </Card.Text>   
      </Card.Body>
    </Card>
    </div>

    <div className='col-md-3'>
            <Card className="bg-warning" text='white' style={{ width: '18rem' }}>
      <Card.Body className="text-center" >
        <Card.Title>ACTIVE CASES</Card.Title>
        <h3>21375</h3>
        <Card.Text>
        
        </Card.Text>    
      </Card.Body>
            </Card>
            </div>
            <div className='col-md-3'>
            <Card className="bg-success" text='white' style={{ width: '18rem' }}>
      <Card.Body className="text-center" >
        <Card.Title>RECOVERED CASES</Card.Title>
        <h3>7137</h3>
        <Card.Text>
         
        </Card.Text> 
           </Card.Body>
            </Card>
            </div>

            <div className='col-md-3'>
            <Card className="bg-danger" text='white' style={{ width: '18rem' }}>
      <Card.Body className="text-center" >
        <Card.Title>DEATHS</Card.Title>
        <h3>939</h3>
        <Card.Text>
         
        </Card.Text>   
      </Card.Body>
           </Card>
            </div>
            <div className='col-md-12'>
              <Statedata />
            </div>


            </div>
          </div>
          </div>

      )
    }
}    
 
export default India