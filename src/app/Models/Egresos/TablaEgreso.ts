export class TablaEgreso {
    constructor (
        public egresoId: number,
        public factura: string,
        public total: string,
        public proveedorId: number,
        public comentario: string,
        public fechaRegistro: Date,
        public fechaTicket: Date,
        public fechaUltimaModificación: Date,
        public creadoPorEmpleadoId: number,
        public ultimaModificacionPorEmpleadoId: number,
        public uso: number,
        public usoDescripcion: string,
    ) {}
}