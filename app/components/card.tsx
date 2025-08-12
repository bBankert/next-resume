import React, { ReactNode } from "react";

type CardContentProps = {
    leftTitle?: string,
    leftTitleHeaderLevel?: Number,
    rightTitle?: string,
    rightTitleHeaderLevel?: Number
    //Center the title, cannot use with left / right
    useCenterTitle?: boolean,
    centerTitle?: string,
    // allow injecting react into the content for more customization
    children?: ReactNode,
}

const Card = ({ 
    leftTitle, 
    leftTitleHeaderLevel, 
    rightTitle, 
    rightTitleHeaderLevel,
    useCenterTitle,
    centerTitle,
    children
}: CardContentProps) => {

    const createCardHeaderLevel = (title: string, headerLevel: Number): ReactNode => {
        switch(headerLevel){
            case 1:
                return <h1 className="text-4xl">{title}</h1>
            case 2:
                return <h2 className="text-3xl">{title}</h2>
            case 3:
                return <h3 className="text-2xl">{title}</h3>
            //assuming there won't be h4 -> 6 since in terms of size they aren't very different
            default:
                return <h4 className="text-xl">{title}</h4>
        }
    }

    return (
        <div className="card w-full bg-slate-800 rounded w-9/12 mb-8">
            <div className={`card-title ${children ? 'border-b-2' : ''} border-slate-950 p-2 flex flex-col md:flex-row ${useCenterTitle ? 'justify-center' : 'justify-between' } items-center`}>
                {useCenterTitle ? 
                    createCardHeaderLevel(centerTitle!!,1) :
                    <>
                        {leftTitleHeaderLevel ?
                            createCardHeaderLevel(leftTitle!!,leftTitleHeaderLevel) :
                            //assuming 3
                            createCardHeaderLevel(leftTitle!!, 3)
                        }
                        {rightTitle && rightTitleHeaderLevel ?
                            createCardHeaderLevel(rightTitle, rightTitleHeaderLevel) :
                            null
                        }
                    </>
                }
                
            </div>
            {children ?
                <div className="card-content p-2" data-testid='card-content'>
                    {children}
                </div> 
                : null
            }
            
        </div>
    )
}

export default Card;