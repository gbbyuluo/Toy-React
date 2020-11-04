import {createElement,Component,render} from './toy-react'
// 自定义组件
class MyComponent extends Component{
  render(){
    return <div>
      <h1>my component</h1>
      {this.children}
      </div>
  }
}
render(<MyComponent id='a' class='c'>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</MyComponent>,document.body);
