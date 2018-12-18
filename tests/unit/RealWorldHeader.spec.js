import { shallowMount, createLocalVue } from '@vue/test-utils'
import RealWorldHeader from '@/components/RealWorldHeader.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('RealWorldHeader.vue', () => {

        let store

        beforeEach(() => {
                store = new Vuex.Store({
                    state: {},
                    getters: {
                        getUser() {
                            return {}
                        }
                    }
                })
            }
        )

        it('renders 3 elements if user is not logged in', () => {
            const wrapper = shallowMount(RealWorldHeader, {store, localVue})
            expect(wrapper.findAll('router-link').length).toBe(3)
        });
})