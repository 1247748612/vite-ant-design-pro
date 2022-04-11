import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import IntlProvider from './locales'
import LayoutWrapper from './layouts'
import QueryClientProvider from './queries'
import 'antd/dist/antd.variable.css'

ReactDOM.render(
  <React.StrictMode>
    <div style={{ height: '100vh' }}>
      <QueryClientProvider>
        <IntlProvider>
          <HashRouter>
            <ConfigProvider >
              <LayoutWrapper />
            </ConfigProvider>
          </HashRouter>
        </IntlProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)
