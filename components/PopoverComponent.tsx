import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
} from '@chakra-ui/react'

const PopoverComponent = () => {
    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <Button className=' w-96  text-blue-500 border hover:border-blue-500 border-gray-200'>Trigger</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    );
};

export default PopoverComponent;