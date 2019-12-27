import React,{Component} from 'react';

import Player from './player';
import Instructions from './instructions';
import '../style/theme.css';

export default class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player:'BATTLE',
            first:[],
            last:[]
        };
    }
    // 根据状态判断是否进行battle
    clickBattle = () => {
        const {player,first,last} = this.state;
        if(player=='BATTLE' && (first.length!=0 && last.length!=0)){
            this.setState({player:'RETURN'});
        }else if(player=='RETURN' && first.length!=0 && last.length!=0){
            this.setState({
                player:'BATTLE',
                first:[],
                last:[]
            });
        }
    }
    // 子组件player传递数据
    transmitDate = (date) => {
        const {first,last} = this.state;
        if(first.length==0 && last.length==0){
            this.setState({first:date});
        }else if(last.length==0 && first.length!=0){
            this.setState({last:date});
        }
    }
    // 清除state中保存的相关API信息
    empty = () => {
        const {first,last} = this.state;
        if(first.length!=0 && last.length==0){
            this.setState({
                first:[]
            });
        }else if(last.length!=0 && first.length!=0 ){
            this.setState({
                last:[]
            });
        }
    }

    render() {
        const {player,first,last} = this.state;
        const style={
            div1:{display: 'flex',flexDirection: 'row',justifyContent: 'space-around',width:'80%',margin:'0 auto',},
            div2:{textAlign:'center',margin:'100px 0 50px 0'},
            h3:{margin:'0 0 15px 70px',fontWeight:'300'},
            ul: { listStyle: 'none', padding: '0 0 10px 0', width: '250px', margin: '10px', textAlign: 'center', background: 'rgba(0, 0, 0, 0.08)' },
            h4: { margin: '15px', fontSize: '30px', fontWeight: '400' },
            img: { width: '200px', height: '200px', margin: '0 0 10px 0'},
            li1: { lineHeight: '50px',fontWeight:'500',fontSize:'20px'},
            li2: { lineHeight: '50px',fontWeight:'500',fontSize:'25px',color:'#a8071a'},
            li3: { lineHeight: '30px', textAlign: 'left', marginLeft: '30px',fontWeight:'400',fontSize:'20px',textTransform:'capitalize'},
            svg: { verticalAlign: 'middle', marginRight: '5px' },
            button:{background:'#262626',border:'0',borderRadius:'5px',padding:'2px 30px',color:'#f5f5f5',fontSize:'23px'},
            
        }

        if(player=='BATTLE' || first.length==0 || last.length==0){
            return (
                <div>
                    <div>
                        <Instructions/>
                    </div>
                    <div style={style.div1}>
                        <div>
                            <h3 style={style.h3}>Player One</h3>
                            <Player transmitDate={this.transmitDate} empty={this.empty}/>
                        </div>
                        <div>
                            <h3 style={style.h3}>Player Two</h3>
                            <Player transmitDate={this.transmitDate} empty={this.empty}/>
                        </div>
                    </div>
                    <div style={style.div2}>
                        <button style={style.button} className={(first.length==0 || last.length==0)?"hide":""} onClick={this.clickBattle}>{player}</button>
                    </div>
                </div>
            );
        }else if(player=='RETURN' && (first.score>last.score)){
            return(
                <div>
                    <div style={style.div1}>
                        <ul style={style.ul}>
                            <li style={style.li1}><h1>Winner</h1></li>
                            <li style={style.li1}><img style={style.img} src={first.avatar_url}/></li>
                            <li style={style.li1}>Score：{first.score}</li>
                            <li style={style.li2}>{first.login}</li>
                            <li style={style.li3}><svg style={style.svg} t="1573455703738" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="830" width="30" height="30"><path d="M789.504 890.368H319.488c-18.432 0-33.28 14.848-33.28 33.28s14.848 33.28 33.28 33.28h470.016c18.432 0 33.28-14.848 33.28-33.28s-14.848-33.28-33.28-33.28z" fill="#FA7268" p-id="831" data-spm-anchor-id="a313x.7781069.0.i15" className="selected"></path><path d="M731.648 392.192c68.096-118.272 79.36-283.136 79.872-289.792 1.024-12.288-5.632-24.576-16.384-30.72-10.752-6.144-24.064-6.144-34.816 0.512-24.576 15.872-241.152 156.16-287.744 235.52-68.096 114.688-235.52 420.864-237.056 423.936-1.536 2.56-2.048 5.12-3.072 7.68l-91.648 158.72c-9.216 15.872-3.584 36.352 12.288 45.568 5.12 3.072 10.752 4.608 16.384 4.608 11.264 0 22.528-6.144 28.672-16.896L291.84 769.536c58.368-39.936 371.2-258.048 439.808-377.344z m-201.728-51.2c23.04-39.424 122.368-115.2 206.336-173.056-9.216 54.272-27.648 130.56-61.952 190.976-39.936 68.608-190.976 189.952-310.272 278.016 54.272-98.816 126.464-229.376 165.888-295.936z" fill="#2c2c2c" p-id="832" data-spm-anchor-id="a313x.7781069.0.i11" className="selected"></path></svg>{first.login}</li>
                        </ul>
                        <ul style={style.ul}>
                            <li style={style.li1}><h1>Loser</h1></li>
                            <li style={style.li1}><img style={style.img} src={last.avatar_url}/></li>
                            <li style={style.li1}>Score：{last.score}</li>
                            <li style={style.li2}>{last.login}</li>
                            <li style={style.li3}><svg style={style.svg} t="1573455703738" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="830" width="30" height="30"><path d="M789.504 890.368H319.488c-18.432 0-33.28 14.848-33.28 33.28s14.848 33.28 33.28 33.28h470.016c18.432 0 33.28-14.848 33.28-33.28s-14.848-33.28-33.28-33.28z" fill="#FA7268" p-id="831" data-spm-anchor-id="a313x.7781069.0.i15" className="selected"></path><path d="M731.648 392.192c68.096-118.272 79.36-283.136 79.872-289.792 1.024-12.288-5.632-24.576-16.384-30.72-10.752-6.144-24.064-6.144-34.816 0.512-24.576 15.872-241.152 156.16-287.744 235.52-68.096 114.688-235.52 420.864-237.056 423.936-1.536 2.56-2.048 5.12-3.072 7.68l-91.648 158.72c-9.216 15.872-3.584 36.352 12.288 45.568 5.12 3.072 10.752 4.608 16.384 4.608 11.264 0 22.528-6.144 28.672-16.896L291.84 769.536c58.368-39.936 371.2-258.048 439.808-377.344z m-201.728-51.2c23.04-39.424 122.368-115.2 206.336-173.056-9.216 54.272-27.648 130.56-61.952 190.976-39.936 68.608-190.976 189.952-310.272 278.016 54.272-98.816 126.464-229.376 165.888-295.936z" fill="#2c2c2c" p-id="832" data-spm-anchor-id="a313x.7781069.0.i11" className="selected"></path></svg>{last.login}</li>
                        </ul>
                    </div>
                    <div style={style.div2}>
                        <button style={style.button} onClick={this.clickBattle}>{player}</button>
                    </div>
                </div>
            )
        }else if(player=='RETURN' &&(first.score<last.score)){
            return(
                <div>
                    <div style={style.div1}>
                        <ul style={style.ul}>
                            <li style={style.li1}><h1>Winner</h1></li>
                            <li style={style.li1}><img style={style.img} src={last.avatar_url}/></li>
                            <li style={style.li1}>Score：{last.score}</li>
                            <li style={style.li2}>{last.login}</li>
                            <li style={style.li3}><svg style={style.svg} t="1573455703738" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="830" width="30" height="30"><path d="M789.504 890.368H319.488c-18.432 0-33.28 14.848-33.28 33.28s14.848 33.28 33.28 33.28h470.016c18.432 0 33.28-14.848 33.28-33.28s-14.848-33.28-33.28-33.28z" fill="#FA7268" p-id="831" data-spm-anchor-id="a313x.7781069.0.i15" className="selected"></path><path d="M731.648 392.192c68.096-118.272 79.36-283.136 79.872-289.792 1.024-12.288-5.632-24.576-16.384-30.72-10.752-6.144-24.064-6.144-34.816 0.512-24.576 15.872-241.152 156.16-287.744 235.52-68.096 114.688-235.52 420.864-237.056 423.936-1.536 2.56-2.048 5.12-3.072 7.68l-91.648 158.72c-9.216 15.872-3.584 36.352 12.288 45.568 5.12 3.072 10.752 4.608 16.384 4.608 11.264 0 22.528-6.144 28.672-16.896L291.84 769.536c58.368-39.936 371.2-258.048 439.808-377.344z m-201.728-51.2c23.04-39.424 122.368-115.2 206.336-173.056-9.216 54.272-27.648 130.56-61.952 190.976-39.936 68.608-190.976 189.952-310.272 278.016 54.272-98.816 126.464-229.376 165.888-295.936z" fill="#2c2c2c" p-id="832" data-spm-anchor-id="a313x.7781069.0.i11" className="selected"></path></svg>{last.login}</li>
                        </ul>
                        <ul style={style.ul}>
                            <li style={style.li1}><h1>Loser</h1></li>
                            <li style={style.li1}><img style={style.img} src={first.avatar_url}/></li>
                            <li style={style.li1}>Score：{first.score}</li>
                            <li style={style.li2}>{first.login}</li>
                            <li style={style.li3}><svg style={style.svg} t="1573455703738" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="830" width="30" height="30"><path d="M789.504 890.368H319.488c-18.432 0-33.28 14.848-33.28 33.28s14.848 33.28 33.28 33.28h470.016c18.432 0 33.28-14.848 33.28-33.28s-14.848-33.28-33.28-33.28z" fill="#FA7268" p-id="831" data-spm-anchor-id="a313x.7781069.0.i15" className="selected"></path><path d="M731.648 392.192c68.096-118.272 79.36-283.136 79.872-289.792 1.024-12.288-5.632-24.576-16.384-30.72-10.752-6.144-24.064-6.144-34.816 0.512-24.576 15.872-241.152 156.16-287.744 235.52-68.096 114.688-235.52 420.864-237.056 423.936-1.536 2.56-2.048 5.12-3.072 7.68l-91.648 158.72c-9.216 15.872-3.584 36.352 12.288 45.568 5.12 3.072 10.752 4.608 16.384 4.608 11.264 0 22.528-6.144 28.672-16.896L291.84 769.536c58.368-39.936 371.2-258.048 439.808-377.344z m-201.728-51.2c23.04-39.424 122.368-115.2 206.336-173.056-9.216 54.272-27.648 130.56-61.952 190.976-39.936 68.608-190.976 189.952-310.272 278.016 54.272-98.816 126.464-229.376 165.888-295.936z" fill="#2c2c2c" p-id="832" data-spm-anchor-id="a313x.7781069.0.i11" className="selected"></path></svg>{first.login}</li>
                        </ul>
                    </div>
                    <div style={style.div2}>
                        <button style={style.button} onClick={this.clickBattle}>{player}</button>
                    </div>
                </div>
            )
        }
    }
}