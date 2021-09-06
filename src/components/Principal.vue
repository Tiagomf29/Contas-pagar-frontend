<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 750"
    >

      <template v-slot:before>
        <div class="q-pa-md">
          <q-tree
            :nodes="simple"
            node-key="label"            
            selected-color="primary"
            v-model:selected="selected"
            default-expand-all
            tick-strategy="none"
            accordion
            no-connectors                 
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="selected"
          animated
          transition-prev="jump-up"
          transition-next="jump-up" 
                  
        >

          <q-tab-panel name="Cadastrar Salário">
            <div class="text-h4 q-mb-md">
                <Cadastro-salario />    
            </div>            
          </q-tab-panel>          

          <q-tab-panel name="Cadastrar Pagamentos">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel> 

          <q-tab-panel name="Consulta contas a pagar">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>  

          <q-tab-panel name="Consulta contas pagas">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel> 

          <q-tab-panel name="Forma de pagamento">
            <div class="text-h4 q-mb-md">
                <Forma-pagamento />
            </div>
            
          </q-tab-panel>  

          <q-tab-panel name="Pagador" >
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>  

          <q-tab-panel name="Tipo de pagamento">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>   

          <q-tab-panel name="Backup">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel> 

          <q-tab-panel name="Restore">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>    

          <q-tab-panel name="Conta banco">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>   

          <q-tab-panel name="Cadastrar usuário">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>  

          <q-tab-panel name="Cadastrar senha">
            
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>  

          <q-tab-panel name="Consulta de salários" >            
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>   


          <q-tab-panel name="Consulta de contas">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel> 

          <q-tab-panel name="Consulta saldos">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>  

          <q-tab-panel name="Comparativo">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>   

          <q-tab-panel name="Acompanhamento">
            <div class="text-h4 q-mb-md">Room service</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>            
          </q-tab-panel>                                                                                                                                                                    

        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>
<script>
import { ref } from 'vue'
import CadastroSalario from './CadastroSalario.vue';
import FormaPagamento from './FormaPagamento.vue';
export default {
    components:{
        CadastroSalario,
        FormaPagamento
    },
  setup () {
    return {
      splitterModel: ref(28),
      selected: ref('Menu'),

      simple: [
        {
          label: 'Menu',
          icon:'home',
          
          children: [
            {
              label: 'Salários',
              icon: 'price_change',
              

              children:[
                  {
                      label: 'Cadastrar Salário',
                      icon: 'point_of_sale'
                  }
              ],                             
            },
            {
              label: 'Pagamentos',
              icon: 'payment',
              children:[
                  {
                      label: 'Cadastrar Pagamentos',
                      icon: 'request_quote'
                  },
                  {
                      label: 'Consulta contas a pagar',
                      icon: 'content_paste_search'
                  },
                  {
                      label: 'Consulta contas pagas',
                      icon: 'manage_search'
                  }                  
              ],                      
            },
            {
              label: 'Tabelas',
              icon: 'table_view',
              children:[
                {
                      label: 'Forma de pagamento',
                      icon: 'payments'  
                },
                {
                      label: 'Pagador',
                      icon: 'assignment_ind'  
                },  
                {
                      label: 'Tipo de pagamento',
                      icon: 'card_travel'  
                },  
                {
                      label: 'Backup',
                      icon: 'backup_table'  
                }, 
                {
                      label: 'Restore',
                      icon: 'restore_from_trash'  
                },  
                {
                      label: 'Conta banco',
                      icon: 'switch_account'  
                },                                                                             
            ]
            },{
              label: 'Usuário',
              icon: 'people_alt',
              children:[
              {
                    label: 'Cadastro Usuário',
                    icon: 'group_add'  
              },
              {
                   label: 'Cadastrar Senha',
                   icon: 'password'  
                }
              ] 
            } ,
            
            {
              label: 'Gráficos',
              icon: 'legend_toggle',
              children:[
              {
                   label: 'Consulta de salários',
                   icon: 'manage_search'  
              },
              {
                   label: 'Consulta de contas',
                   icon: 'find_in_page'  
              },
              {
                   label: 'Consulta saldos',
                   icon: 'image_search'  
              },
              {
                   label: 'Comparativo',
                   icon: 'compare'  
              } ,
              {
                   label: 'Acompanhamento',
                   icon: 'follow_the_signs'  
              }                                            
              ] 
            }             

          ]
        }
      ]
    }
  }
}
</script>