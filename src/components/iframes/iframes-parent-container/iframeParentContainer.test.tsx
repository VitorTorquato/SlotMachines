import {render} from '@testing-library/react';
import "@testing-library/jest-dom"
import { IframeParentComponent } from './iframeParentContainer';



describe("Should have an Iframe tag" , () => {
    it("should render app component" , () => {
        render(<IframeParentComponent/>)

        const iframeElement  = document.querySelector('iframe')
        expect(iframeElement).toBeInTheDocument();
        
    })

})

export default {}