const adminRole = true

export const checkAdminRole = (req, res, next) => {
    if (!adminRole) {
        return res.status(401).json({ Error: 'No tienes permiso para realizar esta acción' })
    } else {
        next()
    }
}