export function getCurrentUser() {
    const raw = localStorage.getItem('currentUser');
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

export function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}

export function registerUser({ name, email, password }) {
    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) : [];

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = users.find((user) => user.email === normalizedEmail);
    if (existingUser) {
        return {
            success: false,
            message: "Cet email est déjà utilisé. Veuillez vous connecter ou utiliser une autre adresse.",
        };
    }

    users.push({
        name: name.trim(),
        email: normalizedEmail,
        password,
    });

    localStorage.setItem('users', JSON.stringify(users));
    return {
        success: true,
        message: "Inscription réussie ! Vous pouvez maintenant vous connecter.",
    };
}
