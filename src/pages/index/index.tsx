import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import FilterDropdown from '../../components/filterDropdown/index'
import data from '../../common/data';//筛选菜单数据
export default class Index extends Component {

  state = {
    filterData: [],
    filterDropdownValue: [],
  }

  componentWillMount() {
    this.setState({
      filterData: data,
      filterDropdownValue: [
        [1, 1, 0],				//第0个菜单选中 一级菜单的第1项，二级菜单的第1项，三级菜单的第3项
        [null, null],			//第1个菜单选中 都不选中
        [1],					//第2个菜单选中 一级菜单的第1项
        [[0], [1, 2, 7], [1, 0]],	//筛选菜单选中 第一个筛选的第0项，第二个筛选的第1,2,7项，第三个筛选的第1,0项
        [[0], [1], [1]],			//单选菜单选中 第一个筛选的第0项，第二个筛选的第1项，第三个筛选的第1项
      ]
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  //接收菜单结果
  confirm = (e) => {
    console.log(e)
  }
  render () {
    const { filterData, filterDropdownValue } = this.state
    return (
      <View className='index'>
        <FilterDropdown filterData={filterData} defaultSelected={filterDropdownValue} updateMenuName={true} confirm={this.confirm} dataFormat="Object"></FilterDropdown>
      </View>
    )
  }
}
