
import Register from 'components/Forms/register'
import Login from 'components/Forms/login'
import { useTranslation } from 'next-i18next'

import React from 'react'

const LoginTabs = ({ color }) => {
  const { t } = useTranslation('login')

  const [openTab, setOpenTab] = React.useState(1)
  return (
    <>
      <div className="block mx-auto lg:hidden md:hidden xl:hidden flex flex-wrap">
        <div className="w-full mx-auto">
          <ul
            className="flex mb-0 list-none flex-wrap px-auto pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mx-5 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {t('login-h2')}
              </a>
            </li>
            <li className="-mb-px mr-2 mx-5 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 {t('register')}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <Login />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                 <Register/>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TabsRender () {
  return (
    <>
       <LoginTabs color="gray" />;
    </>
  )
}
