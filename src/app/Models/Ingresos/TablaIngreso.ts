export class TablaIngreso {
    constructor (
        public ingresoId: number,
        public ticket: string,
        public total: string,
        public clienteId: number,
        public fechaRegistro: Date,
        public fechaTicket: Date,
        public fechaUltimaModificación: Date,
        public creadoPorEmpleadoId: number,
        public ultimaModificacionPorEmpleadoId: number,
        public uso: number,
        public usoDescripcion: string,
        public comentario?: string
    ) {}
}