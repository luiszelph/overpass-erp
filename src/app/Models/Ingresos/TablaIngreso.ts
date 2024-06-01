export class TablaIngreso {
    constructor (
        public ingresoId: number,
        public ticket: string,
        public Total: string,
        public ClienteId: number,
        public FechaRegistro: Date,
        public FechaTicket: Date,
        public FechaUltimaModificación: Date,
        public CreadoPorEmpleadoId: number,
        public UltimaModificacionPorEmpleadoId: number,
        public Uso: number,
        public UsoDescripcion: string,
        public Comentario?: string
    ) {}
}