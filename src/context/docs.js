import React from 'react';
import {watchCollection, watchUserChanges} from '../Firebase';

export const DocContext = React.createContext();

export class DocContextProvider  extends React.Component{
    state = {
        docs:[],
    }

    componentDidMount(){
        watchUserChanges((user)=>{
            if(user && !this.isSetup){
                this.isSetup = true;
                watchCollection((docs)=>{
                    this.setState({docs});
                });
            }
        });
        
    }

    render(){
        return(
            <DocContext.Provider value = {this.state}>

                {this.props.children}

            </DocContext.Provider>
        );
    }

}

export const DocContextConsumer = DocContext.Consumer;