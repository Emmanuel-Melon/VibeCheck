export const EditProfileInfo = () => {
    return (
        <div>
            <h3>Personal Information</h3>
            <p>Living In</p>
            <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
            <p>Interests</p>
            <div className="flex gap-2">
                <div className="badge">Music</div>
            </div>
            <p>Languages I know</p>
        </div>
    )
}