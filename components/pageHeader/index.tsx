import React from 'react'

interface Props {

    title: string;
    breadcrumbTitle: string
}

export const PageHeader = ({ title, breadcrumbTitle }: Props) => {
    return (
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-4 text-white animated slideInDown mb-4">{title}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{breadcrumbTitle}</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}
