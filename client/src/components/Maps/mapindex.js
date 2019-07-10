import React, { Component } from 'react';
import Section from './Sections/sections';
import './mapindex.scss';

class MapIndex extends Component {

    render() {
        return (
            <div className = "mapindex">
                <Section 
                    title="Average Cost by Hour"
                    dark={false}
                    page = "/maps/costmap"
                    color = '#FFF2AF'
                />
                <Section 
                    title="Map 2"
                    dark={true}
                    page = "/maps/2"
                    color = '#F6CF65'
                />
                <Section 
                    title="Map 3"
                    dark={false}
                    page = "/maps/3"
                    color = '#C3ECB2'
                />
                <Section 
                    title="Map 4"
                    dark={true}
                    page = "/maps/4"
                    color = '#AADAFF'
                    
                />
              </div>
      
        );
    }
  
}


export default MapIndex;
