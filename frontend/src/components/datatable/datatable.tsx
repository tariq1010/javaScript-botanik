
import React, { useState, useEffect, useRef, SyntheticEvent } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './datatable.css';

const DataTableCrudDemo = ({ minted, data, action }: { minted: boolean, data?: any, action?: any }) => {


    const [products, setProducts] = useState<any>(null);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [product, setProduct] = useState<any>(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef<any>(null);
    const dt = useRef<any>(null);




    const formatCurrency = (value: any) => {
        return value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const confirmDeleteProduct = (product: any) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        action(product._id)
        setDeleteProductDialog(false);
    }

    const imageBodyTemplate = (rowData: any) => {
        return <img src={rowData.image} onError={(e: SyntheticEvent<HTMLImageElement>) => e.currentTarget.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBodyTemplate = (rowData: any) => {
        return formatCurrency(rowData.price);
    }

    const statusBodyTemplate = (rowData: any) => {
        return <span className={`product-badge status-${rowData.inventoryStatus?.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    const actionBodyTemplate = (rowData: any) => {
        return (
            <React.Fragment>
                {
                    minted ? "" : <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
                }

            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="p-mx-0 p-my-1">Manage NFT's</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e: any) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );

    return (
        <div className="datatable-crud-demo">
            <Toast ref={toast} />
            <div className="card">
                {
                    minted ?
                        <DataTable ref={dt} value={data ? data : products}
                            dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                            globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                            <Column field="name" header="Name" sortable style={{ minWidth: '12rem' }}></Column>
                            <Column field="description" header="Description" sortable style={{ minWidth: '16rem' }}></Column>
                            <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                            <Column field="token_id" header="Token Id" sortable style={{ minWidth: '16rem' }}></Column>
                            <Column field="description" header="Description" sortable style={{ minWidth: '10rem' }}></Column>
                            <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                        </DataTable> :
                        <DataTable ref={dt} value={data ? data : products}
                            dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                            globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                            <Column field="name" header="Name" sortable style={{ minWidth: '12rem' }}></Column>
                            <Column field="dna" header="Dna" sortable style={{ minWidth: '16rem' }}></Column>
                            <Column field="edition" header="Edition" sortable style={{ minWidth: '16rem' }}></Column>
                            <Column field="external_link" header="External Link" sortable style={{ minWidth: '16rem' }}></Column>
                            <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                            <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                            <Column field="trade_count" header="Trade Count" sortable style={{ minWidth: '16rem' }}></Column>
                            <Column field="description" header="Description" sortable style={{ minWidth: '10rem' }}></Column>
                            <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                        </DataTable>
                }

            </div>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                </div>
            </Dialog>

        </div>
    );
}


export default DataTableCrudDemo;