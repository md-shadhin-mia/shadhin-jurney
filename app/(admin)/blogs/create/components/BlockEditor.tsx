"use client"
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Dropdown from '@/components/ui/Dropdown';
import DropdownItem from '@/components/ui/Dropdown/DropdownItem';
import DropdownMenu from '@/components/ui/Dropdown/DropdownMenu';
import Menu from '@/components/ui/Menu';
import Radio from '@/components/ui/Radio';
import React, { useEffect } from 'react'
import { FaEllipsisH } from 'react-icons/fa';

type Props<T> = {
    children: React.ReactNode | ((props: { args?: T }) => React.ReactNode),
    iniArgs?: T
}
function BlockEditor<T = {}>({ children, iniArgs }: Props<T>) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [menuRef, setMenuRef] = React.useState<HTMLDivElement | null>(null);
    const [args, setArgs] = React.useState<{ [keys: string]: string }>({ ...iniArgs });
    useEffect(() => {
        setArgs({ ...args, ...iniArgs })
    }, [iniArgs]);
    return (
        <div className='relative group/block'>
            {
                typeof children === 'function' ?
                    children({args}) : children
            }
            <div className='absolute -top-full left-0 hidden group-hover/block:block'>
                <Dropdown renderTitle={<Button size='sm'><FaEllipsisH /></Button>} >
                    <DropdownItem>
                        <Checkbox checked={args?.customClass?.includes('italic')} onChange={(value, e) => {
                            console.log(value);
                            setArgs((preArgs) => {
                                const preArgsCopy = { ...preArgs }
                                preArgsCopy['customClass'] = preArgs.customClass?.includes(' italic') ? preArgs.customClass.replace(' italic', '') : (preArgs.customClass ?? "") + " italic";
                                return preArgsCopy;
                            })
                        }}>Italic</Checkbox>
                    </DropdownItem>

                    <Dropdown.Menu title="Verient">
                        
                                <Radio.Group vertical className='w-full'>
                                    <Dropdown.Item><Radio value={1}>1</Radio></Dropdown.Item>
                                    <Dropdown.Item><Radio value={2}>2</Radio></Dropdown.Item>
                                    <Dropdown.Item><Radio value={3}>3</Radio></Dropdown.Item>
                                    <Dropdown.Item><Radio value={4}>4</Radio></Dropdown.Item>
                                    <Dropdown.Item><Radio value={5}>5</Radio></Dropdown.Item>
                                </Radio.Group>
                    </Dropdown.Menu>

                </Dropdown>
            </div>

        </div>
    )
}

export default BlockEditor
