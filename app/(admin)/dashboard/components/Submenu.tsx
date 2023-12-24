"use client"
import Dropdown from '@/components/ui/Dropdown'

const Submenu = () => {
    return (
        <Dropdown title="Click Me!" activeKey="item-2-1-2">

            <Dropdown.Item eventKey="item-1">Item 1</Dropdown.Item>

            <Dropdown.Menu eventKey="item-2" title="Item 2" placement="middle-start-top">

                <Dropdown.Menu eventKey="item-2-1" title="Item 2-1">

                    <Dropdown.Item eventKey="item-2-1-1">

                        Item 2-1-1

                    </Dropdown.Item>

                    <Dropdown.Item eventKey="item-2-1-2">

                        Item 2-1-2

                    </Dropdown.Item>

                    <Dropdown.Item eventKey="item-2-1-3">

                        Item 2-1-3

                    </Dropdown.Item>

                </Dropdown.Menu>

                <Dropdown.Item eventKey="item-2-2">Item 2-2</Dropdown.Item>

                <Dropdown.Item eventKey="item-2-3">Item 2-3</Dropdown.Item>

            </Dropdown.Menu>

            <Dropdown.Item>Item 3</Dropdown.Item>

        </Dropdown>
    )
}

export default Submenu

