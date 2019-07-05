template 

script{
    - export defalut{
        - data
        - methods
        - computed
        - data()
        - mounted()
        - watch
        - components     
    }

}

style {
    - css
}

lifecycle{
    - beforeCreate
    - created
    - beforeMount
    - mounted
    - beforeUpdate
    - updated
    - beforeDestroy
    - destroyed
}

指令{
    v-if
    v-else
    v-for
    v-bind （v-bind:href => :href）
    v-on （v-on:click => @click）
    v-show
}
prop{
    单向流数据，一般是父级向子级传递，子级不对prop做修改。
    若子级需要修改传递的参数，可以在data中用prop作为初始值新建一个变量
}

插槽{
    nuxt中<nuxt/> 应该也是插槽的一种实现
}


vue-class-component{
    
}

vuex{
    stroe{
        - state
        - mutations  (不可异步执行，应该是这样才有了action，在action中异步执行然后再执行mutations)
        - actions
        - getters
    }
}


